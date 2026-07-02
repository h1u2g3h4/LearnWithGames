from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "assets" / "characters"


def connected_components(candidate: np.ndarray) -> list[np.ndarray]:
    height, width = candidate.shape
    visited = np.zeros_like(candidate, dtype=bool)
    components: list[np.ndarray] = []

    for start_y, start_x in zip(*np.nonzero(candidate & ~visited)):
        if visited[start_y, start_x]:
            continue

        queue = deque([(start_y, start_x)])
        visited[start_y, start_x] = True
        pixels: list[tuple[int, int]] = []

        while queue:
            y, x = queue.popleft()
            pixels.append((y, x))
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    if dx == 0 and dy == 0:
                        continue
                    ny, nx = y + dy, x + dx
                    if (
                        0 <= ny < height
                        and 0 <= nx < width
                        and candidate[ny, nx]
                        and not visited[ny, nx]
                    ):
                        visited[ny, nx] = True
                        queue.append((ny, nx))

        component = np.zeros_like(candidate, dtype=bool)
        ys, xs = zip(*pixels)
        component[np.array(ys), np.array(xs)] = True
        components.append(component)

    return sorted(components, key=np.count_nonzero, reverse=True)


def save_mask(mask: np.ndarray, source_alpha: np.ndarray, output: Path) -> None:
    alpha = Image.fromarray((mask * 255).astype(np.uint8), mode="L")
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.65))
    alpha_array = np.asarray(alpha, dtype=np.uint8)
    alpha_array = np.minimum(alpha_array, source_alpha)
    rgba = np.full((*mask.shape, 4), 255, dtype=np.uint8)
    rgba[:, :, 3] = alpha_array
    Image.fromarray(rgba, mode="RGBA").save(output, optimize=True)


def build_masks(name: str) -> None:
    image = Image.open(ASSET_DIR / f"{name}.png").convert("RGBA")
    pixels = np.asarray(image)
    rgb = pixels[:, :, :3].astype(np.int16)
    source_alpha = pixels[:, :, 3]
    height, width = source_alpha.shape

    maximum = rgb.max(axis=2)
    minimum = rgb.min(axis=2)
    chroma = maximum - minimum
    luminance = rgb.mean(axis=2)

    shirt_region = np.zeros((height, width), dtype=bool)
    shirt_region[int(height * 0.18) : int(height * 0.53), int(width * 0.2) : int(width * 0.8)] = True
    shirt_candidate = (
        shirt_region
        & (source_alpha > 12)
        & (chroma < 48)
        & (luminance > 112)
    )
    shirt_components = connected_components(shirt_candidate)
    shirt_mask = shirt_components[0] if shirt_components else shirt_candidate

    shoe_region = np.zeros((height, width), dtype=bool)
    shoe_region[int(height * 0.78) : int(height * 0.98), int(width * 0.18) : int(width * 0.82)] = True
    shoe_candidate = (
        shoe_region
        & (source_alpha > 12)
        & (chroma < 58)
        & (luminance > 138)
    )
    shoe_components = connected_components(shoe_candidate)
    shoe_mask = np.zeros_like(shoe_candidate)
    for component in shoe_components[:2]:
        shoe_mask |= component

    save_mask(shirt_mask, source_alpha, ASSET_DIR / f"{name}-shirt-mask.png")
    save_mask(shoe_mask, source_alpha, ASSET_DIR / f"{name}-shoe-mask.png")

    print(
        f"{name}: shirt={np.count_nonzero(shirt_mask)} px, "
        f"shoes={np.count_nonzero(shoe_mask)} px"
    )


for character_name in ("female", "male"):
    build_masks(character_name)

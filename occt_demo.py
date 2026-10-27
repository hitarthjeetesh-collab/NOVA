
from build123d import Box, Cylinder, Align, Pos, export_step
from ocp_vscode import show

# All dimensions are in millimetres
plate_length = 80
plate_width = 40
plate_thickness = 10

center_hole_radius = 5
mounting_hole_radius = 3
mounting_hole_offset = 30

raised_cylinder_radius = 10
raised_cylinder_height = 15

centered = (Align.CENTER, Align.CENTER, Align.CENTER)

# 1. Create the base plate
plate = Box(
    plate_length,
    plate_width,
    plate_thickness,
    align=centered,
)

# 2. Cut the central hole
center_hole = Cylinder(
    radius=center_hole_radius,
    height=plate_thickness + 2,
    align=centered,
)

part = plate - center_hole

# 3. Cut two symmetrical mounting holes
for x_position in (-mounting_hole_offset, mounting_hole_offset):
    mounting_hole = Pos(x_position, 0, 0) * Cylinder(
        radius=mounting_hole_radius,
        height=plate_thickness + 2,
        align=centered,
    )
    part = part - mounting_hole

# 4. Add a raised cylinder on top of the plate
raised_cylinder = Pos(
    0,
    0,
    plate_thickness / 2 + raised_cylinder_height / 2,
) * Cylinder(
    radius=raised_cylinder_radius,
    height=raised_cylinder_height,
    align=centered,
)

part = part + raised_cylinder

# 5. Validate the resulting geometry
if not part.is_valid:
    raise RuntimeError("Invalid CAD geometry")

# 6. Export the model and display it
export_step(part, "nova_demo.step")
show(part)

print(f"Volume: {part.volume:.2f} mm^3")
print("Geometry valid:", part.is_valid)
print("Exported nova_demo.step")

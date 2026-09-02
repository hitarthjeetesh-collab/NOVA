import type { CodeFile, CodeSuggestion } from "./types/code";

export const INITIAL_CODE_FILES: CodeFile[] = [
  {
    id: "rover-control",
    name: "rover_control.py",
    path: "src/rover_control.py",
    language: "python",
    modified: false,
    content: `import time


class Rover:
    def __init__(self):
        self.speed = 0
        self.heading = 0

    def set_speed(self, speed):
        self.speed = speed

    def stop(self):
        self.speed = 0


rover = Rover()
rover.set_speed(50)

while True:
    print(f"Speed: {rover.speed}")
    time.sleep(0.1)
`,
  },
  {
    id: "motors",
    name: "motors.py",
    path: "src/motors.py",
    language: "python",
    modified: false,
    content: `class MotorController:
    def __init__(self):
        self.left_speed = 0
        self.right_speed = 0

    def set_speed(self, left, right):
        self.left_speed = left
        self.right_speed = right

    def stop(self):
        self.set_speed(0, 0)
`,
  },
  {
    id: "sensors",
    name: "sensors.py",
    path: "src/sensors.py",
    language: "python",
    modified: false,
    content: `class SensorManager:
    def read_distance(self):
        return 0

    def read_heading(self):
        return 0
`,
  },
  {
    id: "test-rover",
    name: "test_rover.py",
    path: "tests/test_rover.py",
    language: "python",
    modified: false,
    content: `def test_rover_speed():
    expected_speed = 50

    assert expected_speed == 50
`,
  },
];

export const INITIAL_SUGGESTIONS: CodeSuggestion[] = [
  {
    id: "explain",
    title: "Explain this code",
    description:
      "Get an engineering-focused explanation of the selected code.",
    type: "explain",
  },
  {
    id: "generate",
    title: "Generate implementation",
    description:
      "Generate code for the current engineering task.",
    type: "generate",
  },
  {
    id: "fix",
    title: "Fix code",
    description:
      "Identify and propose fixes for the selected code.",
    type: "fix",
  },
  {
    id: "optimize",
    title: "Optimize",
    description:
      "Look for opportunities to improve the implementation.",
    type: "optimize",
  },
];
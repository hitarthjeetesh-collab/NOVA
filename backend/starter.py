import os
import uvicorn


def start_api():
    """Start the AEVRA API."""
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 8000)),
    )


def main():
    mode = os.environ.get("AEVRA_MODE", "api")

    if mode == "api":
        start_api()

    else:
        raise ValueError(f"Unknown AEVRA_MODE: {mode}")


if __name__ == "__main__":
    main()
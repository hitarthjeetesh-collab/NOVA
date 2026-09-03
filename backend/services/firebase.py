
import os

import boto3


def get_filebase():
    """
    Return an S3 client configured for Filebase.
    """

    access_key = os.environ.get("FILEBASE_ACCESS_KEY")
    secret_key = os.environ.get("FILEBASE_SECRET_KEY")

    if not access_key:
        raise RuntimeError(
            "FILEBASE_ACCESS_KEY is not configured"
        )

    if not secret_key:
        raise RuntimeError(
            "FILEBASE_SECRET_KEY is not configured"
        )

    return boto3.client(
        "s3",
        endpoint_url="https://s3.filebase.io",
        region_name="us-east-1",
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key,
    )


def get_bucket():
    bucket = os.environ.get("FILEBASE_BUCKET")

    if not bucket:
        raise RuntimeError(
            "FILEBASE_BUCKET is not configured"
        )

    return bucket
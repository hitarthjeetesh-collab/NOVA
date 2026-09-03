import json
import os

import firebase_admin
from firebase_admin import credentials, firestore


def get_firestore():
    """
    Return the AEVRA Firestore client.

    The Firebase service account is provided through the
    FIREBASE_SERVICE_ACCOUNT_JSON environment variable.
    """

    if not firebase_admin._apps:
        service_account_json = os.environ.get(
            "FIREBASE_SERVICE_ACCOUNT_JSON"
        )

        if not service_account_json:
            raise RuntimeError(
                "FIREBASE_SERVICE_ACCOUNT_JSON is not configured"
            )

        service_account_info = json.loads(service_account_json)

        cred = credentials.Certificate(service_account_info)

        firebase_admin.initialize_app(cred)

    return firestore.client()
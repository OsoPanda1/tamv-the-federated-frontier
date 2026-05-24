from fastapi.testclient import TestClient

from main import app


client = TestClient(app)


def _auth_header() -> dict:
    payload = {"isni_id": "0009-0008-5050-1539", "quantum_signature": "x"}
    token = client.post("/auth", json=payload).json()["token"]
    return {"Authorization": f"Bearer {token}"}


def test_health_ok():
    r = client.get("/health")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"


def test_social_and_ledger_flow():
    headers = _auth_header()
    r = client.post("/social", json={"user_input": "hola tamv"}, headers=headers)
    assert r.status_code == 200
    body = r.json()
    assert body["episode_id"].startswith("epi_")

    ledger = client.get("/bookpi")
    assert ledger.status_code == 200
    assert len(ledger.json()) >= 2


def test_economy_lock_flow():
    headers = _auth_header()
    payload = {"recipient_isni": "0009-0008-5050-9999", "amount": 100.0, "lock_days": 365}
    r = client.post("/economy", json=payload, headers=headers)
    assert r.status_code == 200
    assert r.json()["allocated_voting_power"] > 0

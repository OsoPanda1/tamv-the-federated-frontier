# TAMV Atlas Core Backend (Genesis Enterprise)

Backend FastAPI local-first para trazabilidad, memoria episódica y economía bloqueada.

## Ejecutar localmente

```bash
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## Endpoints

- `GET /health`
- `POST /auth`
- `POST /social`
- `POST /economy`
- `GET /bookpi`
- `GET /datagit`
- `GET /mdd`

## Pruebas

```bash
pytest -q
```

## Nota de análisis sobre OsoPanda1

Para un análisis **archivo por archivo** de todos los repositorios de `https://github.com/OsoPanda1`, se recomienda un pipeline automatizado por API de GitHub (repos -> árbol -> blobs) con paginación y caching local, debido al volumen (más de 100 repos públicos visibles).

# TAMV — The Federated Frontier

Repositorio de implementación funcional para TAMV MD-X4.

## Objetivo
Construir una base técnica replicable con módulos claros, auditables y cerrables.

## TAMV Human Coherence Filter (THCF)
THCF evalúa cada módulo con 4 reglas:
1. Entendible
2. Justificable
3. Operacionalmente coherente
4. Limitado

Pregunta obligatoria de aprobación:
**¿Este módulo ayuda a valorar y respetar al usuario como individuo?**

Si no puede responderse de forma simple, el módulo no entra al núcleo inicial.

## Módulos implementados
- Core Protocol + MSR + BookPI + EOCT
- Guardian + XR visual translation + DreamSpaces + XR Gateway
- Identity + Economy + Memberships + Ledger
- Social (posts/channels/dm)
- THCF + Module Registry para cierre de módulos

## Desarrollo local
```bash
npm install
npm run test
npm run build
npm run dev
```

## Estado de integración externa
Se intentó analizar `https://github.com/OsoPanda1/documentacion-total-tamv-online.git`, pero este entorno devolvió error de red `403 CONNECT tunnel` al clonar.

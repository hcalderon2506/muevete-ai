MUÉVETE AI — DATA LOCAL
Copia la carpeta data dentro del proyecto MUÉVETE AI.

Estructura:
MUÉVETE AI/
  index.html
  server.mjs
  package.json
  .env
  data/
    manifest.json
    variables.json
    rules.json
    exercises.json
    sessions.json
    coach_responses.json
    recommendations.json
    evaluation.json
    safety.json

La web podrá consultar los JSON mediante fetch('/data/archivo.json').
No guardes API keys dentro de estos archivos.

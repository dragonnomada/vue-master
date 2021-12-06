@rem Script para inicializar el servidor

echo Inicializando el servidor...

echo Ofuscando los servicios...

call npx javascript-obfuscator services.source --output services --compact true

echo Ejecutando el servidor

call node .
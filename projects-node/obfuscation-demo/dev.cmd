echo OBfuscating lib/
call npx javascript-obfuscator lib.source --output lib --compact true --self-defending true

@rem call npx javascript-obfuscator demo.source --output demo --compact true --self-defending true

call npm start
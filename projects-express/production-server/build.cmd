@rem Scripts para compilar el servidor a productivo

echo Compilando el servidor...

call pkg .

cp .env.example dist/.env


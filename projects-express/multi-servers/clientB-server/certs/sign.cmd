@rem Client Self-Signed Certifcate (Invalid)

cd %~dp0

call openssl x509 ^
	-req ^
	-in clientB_csr.pem ^
	-signkey clientB_key.pem ^
	-out clientB_cert.pem ^
	-days 365
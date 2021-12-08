@rem Generate Self-Signed Certifcate (Invalid)

cd %~dp0

call openssl req ^
	-newkey rsa:4096 ^
	-keyout clientB_key.pem ^
	-out clientB_csr.pem ^
	-nodes ^
	-days 365 ^
	-subj "/CN=ClientB"

# sign with clientB_csr.pem

call openssl x509 ^
	-req ^
	-in clientB_csr.pem ^
	-signkey clientB_key.pem ^
	-out clientB_cert.pem ^
	-days 365
@rem Generate Client Certifcate

cd %~dp0

call openssl req ^
	-newkey rsa:4096 ^
	-keyout clientB_key.pem ^
	-out clientB_csr.pem ^
	-nodes ^
	-days 365 ^
	-subj "/CN=ClientB"
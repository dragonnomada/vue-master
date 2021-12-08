@rem Generate Client Certifcate (Valid)

cd %~dp0

call openssl req ^
	-newkey rsa:4096 ^
	-keyout clientA_key.pem ^
	-out clientA_csr.pem ^
	-nodes ^
	-days 365 ^
	-subj "/CN=ClientA"
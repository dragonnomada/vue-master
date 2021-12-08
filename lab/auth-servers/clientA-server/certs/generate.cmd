@rem Generate Server-Signed Certifcate (Valid)

cd %~dp0

call openssl req ^
	-newkey rsa:4096 ^
	-keyout clientA_key.pem ^
	-out clientA_csr.pem ^
	-nodes ^
	-days 365 ^
	-subj "/CN=ClientA"

@rem Sign with server_cert.pem

openssl x509 ^
	-req ^
	-in clientA_csr.pem ^
	-CA ..\..\main-server\certs\server_cert.pem ^
	-CAkey ..\..\main-server\certs\server_key.pem ^
	-out clientA_cert.pem ^
	-set_serial 01 ^
	-days 365
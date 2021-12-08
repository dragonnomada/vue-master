@rem Server Sign Client Certifcate (Valid)

cd %~dp0

call openssl x509 ^
	-req ^
	-in clientA_csr.pem ^
	-CA ..\..\server_cert.pem ^
	-CAkey ..\..\server_key.pem ^
	-out clientA_cert.pem ^
	-set_serial 01 ^
	-days 365
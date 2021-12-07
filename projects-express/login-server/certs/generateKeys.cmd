@rem Generate Private & Public Key pair

echo Create Private Key

call openssl genrsa -out private.key 4096

call openssl rsa -in private.key -out public.pem -pubout -outform PEM


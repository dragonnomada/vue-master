async function authorize(client, certificate) {
    if (client.authorized) {
        // TODO: Comprobar si el cliente es reconocido (por ejemplo, por la base de datos) certificate.subject.CN
        return certificate
    }
    if (!certificate.subject) throw new Error(`Not Certificate`)
    if (certificate.issuer.CN !== 'Master') throw new Error(`Invalid Certificate ${certificate.subject.CN} | ${certificate.issuer.CN}`)
    throw new Error(`Unathorized ${certificate.subject.CN} | ${certificate.issuer.CN}`)
}

module.exports = {
    authorize
}
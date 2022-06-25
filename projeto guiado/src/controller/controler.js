const projetoSchema = require ("../models/projetoSchema")


const getAll = async (req, res) => {
    try {
        const allprojeto = await projetoSchema.find()
        res.status(200).send(allprojeto)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
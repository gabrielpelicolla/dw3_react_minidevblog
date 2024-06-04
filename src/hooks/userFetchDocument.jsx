import { useState, useEffect } from "react"
import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"

export const userFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(null)

    useEffect(() => {
        const loadDocument = async () => {
            setloading(true)
            try {
                const docRef = await doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())
            } catch (error) {
                console.log(error)
                setError(error.message)
            }
            setloading(false)
        }
        loadDocument()
    }, [docCollection, id])

    console.log(document)

    return {
        document,
        loading,
        error
    }
}
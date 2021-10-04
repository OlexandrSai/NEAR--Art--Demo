import { ref, onMounted } from "vue";
import {
    generateDesign
  } from "@/services/near";

export const useArtDemo= () => {
    //const generatedDesign  = ref(null)
    const test = ref(null)
    const  err = ref(null)

    onMounted(async () => {
        try {
            test.value=1
        } catch (e) {
            err.value = e
            console.log('error')
        }
    })

    const handleGenerateDesign = async () => {
        generateDesign.value  = generateDesign()
    }

    return {
        generateDesign:  handleGenerateDesign
    }
}
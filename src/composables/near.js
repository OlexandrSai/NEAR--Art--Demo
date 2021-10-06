import { ref, onMounted } from "vue";
import {
    generateDesign,
    claimDesign,
    burnDesign
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

    const handleClaimDesign = async (seed) => {
        claimDesign(seed)
    }

    const handleBurnDesign = async () => {
        burnDesign()
    }

    return {
        generateDesign:  handleGenerateDesign,
        claimDesign: handleClaimDesign,
        burnDesign: handleBurnDesign
    }
}
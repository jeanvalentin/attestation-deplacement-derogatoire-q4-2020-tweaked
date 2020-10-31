
/*
GET data example:

?firstname=Camille&lastname=Dupont&birthday=01%2F01%2F1970&placeofbirth=Paris&address=999+avenue+de+France&city=Paris&zipcode=75001&reasons=travail
*/

import pdfBase from '../certificate.pdf'
import { generatePdf } from './pdf-util'
import { downloadBlob } from './dom-utils'

async function main () {
	const creationInstant = new Date()

	const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)
	const profile = {
		"address": urlParams.get('address'),
		"birthday": urlParams.get('birthday'),
		"city": urlParams.get('city'),
		"datesortie": creationInstant.toLocaleDateString('fr-FR'),
		"firstname": urlParams.get('firstname'),
		"heuresortie": creationInstant.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
		"lastname": urlParams.get('lastname'),
		"ox-achats": "achats",
		"ox-convocation": "convocation",
		"ox-enfants": "enfants",
		"ox-famille": "famille",
		"ox-handicap": "handicap",
		"ox-missions": "missions",
		"ox-sante": "sante",
		"ox-sport_animaux": "sport_animaux",
		"ox-travail": "travail",
		"placeofbirth": urlParams.get('placeofbirth'),
		"zipcode": urlParams.get('zipcode')
	}
	const reasons = urlParams.get('reasons')

	const pdfBlob = await generatePdf(profile, reasons, pdfBase)
	const creationDate = creationInstant.toLocaleDateString('fr-CA')
	const creationHour = creationInstant
	  .toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
	  .replace(':', '-')
	downloadBlob(pdfBlob, `attestation-${creationDate}_${creationHour}.pdf`)
}

main()

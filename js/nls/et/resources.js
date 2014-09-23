﻿define(
     ({
        map: {
            error: "Kaardi loomine ebaõnnestus"
        },
        onlineStatus: {
            offline: "Töötate praegu võrguühenduseta režiimis. Esitatud vormid salvestatakse kohalikult, kuni serveriga luuakse ühendus.",
            reconnecting: "Ühenduse taastamine&hellip;",
            pending: "${total} ootel kutse(t) edastatakse võrguühenduse taastamisel."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "Minu organisatsioon",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Minu sisu",
                    favoritesLabel: "Minu lemmikud"
                },
                title: "Vali veebikaart",
                searchTitle: "Otsi",
                ok: "Ok",
                cancel: "Tühista",
                placeholder: "Sisesta otsingutingimus"
            },
            groupdlg: {
                items: {
                    organizationLabel: "Minu organisatsioon",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "Minu sisu",
                    favoritesLabel: "Minu lemmikud"
                },
                title: "Vali grupp",
                searchTitle: "Otsi",
                ok: "Ok",
                cancel: "Tühista",
                placeholder: "Sisesta otsingutingimus"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Y-koordinaat",
            utm_easting: "X-koordinaat",
            utm_zone_number: "Tsooni number",
            geoFormGeneralTabText: "1. Sisestage teave",
            locationInformationText: "2. Valige asukoht",
            submitInformationText: "3. Täitke vorm",
            submitInstructions: "Lisage see teave kaardile.",
            myLocationText: "Praegune asukoht",
            locationDescription: "Määrake selle kirje jaoks asukoht, klõpsates/puudutades kaarti või kasutades üht järgmist valikut.",
            addressText: "Otsi",
            geographic: "Laius/pikkus",
            locationTabText: "Asukoht",
            locationPopupTitle: "Asukoht",
            submitButtonText: "Edasta kirje",
            submitButtonTextLoading: "Edastamine&hellip;",
            formValidationMessageAlertText: "Järgmised väljad on kohustuslikud:",
            selectLocation: "Valige oma edastuse ${openLink}asukoht${closeLink}.",
            emptylatitudeAlertMessage: "Sisestage ${openLink}laiuse${closeLink} koordinaat.",
            emptylongitudeAlertMessage: "Sisestage ${openLink}pikkuse${closeLink} koordinaat.",
            shareUserTitleMessage: "Täname panuse eest!",
            entrySubmitted: "Teie kirje on kaardile edastatud.",
            shareThisForm: "Jaga seda vormi",
            shareUserTextMessage: "Ärgitage teisi järgmiste valikute abil panust andma.",
            addAttachmentFailedMessage: "Manuse lisamine kihile ebaõnnestus",
            addFeatureFailedMessage: "Objekti lisamine kihile ebaõnnestus",
            noLayerConfiguredMessage: "Š_An error occured loading or finding an editable feature layer. In order to display the form and start collecting submissions, add an editable Feature Layer to the Webmap._ä",
            placeholderLatitude: "Laiuskraad (Y)",
            placeholderLongitude: "Pikkuskraad (X)",
            latitude: "Laiuskraad",
            longitude: "Pikkuskraad",
            findMyLocation: "Määra minu asukoht",
            finding: "Asukoha määramine&hellip;",
            backToTop: "Tagasi algusse",
            addressSearchText: "Teie edastus kuvatakse siin. Asukoha korrigeerimiseks lohistage nõela.",
            shareModalFormText: "Vormi link",
            close: "Sulge",
            locationNotFound: "Asukohta ei leitud.",
            setLocation: "Määra asukoht",
            find: "Leia aadress või koht",
            attachment: "Manus",
            toggleDropdown: "Vaheta rippmenüüd",
            invalidLatLong: "Sisestage õiged ${latLink}laiuse${closeLink} ja ${lngLink}pikkuse${closeLink} koordinaadid.",
            invalidUTM: "Sisestage õiged ${openLink}UTM${closeLink}-koordinaadid.",
            invalidUSNG: "Sisestage õiged ${openLink}USNG${closeLink}-koordinaadid.",
            invalidMGRS: "Sisestage õiged ${openLink}MGRS${closeLink}-koordinaadid.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "Vali&hellip;",
            applyEditsFailedMessage: "Kahjuks ei saa teie kirjet edastada. Proovige uuesti.",
            requiredFields: "Esines mõningaid vigu. Parandage need allpool.",
            requiredField: "(nõutud)",
            error: "Viga",
            textRangeHintMessage: "${openStrong}Vihje:${closeStrong} Miinimumväärtus ${minValue} ja maksimumväärtus ${maxValue}",
            dateRangeHintMessage: "${openStrong}Vihje:${closeStrong} Kuupäeva alampiir ${minValue} ja kuupäeva ülempiir ${maxValue}"
        },
        builder: {
            invalidUser: "Kahjuks pole Teil selle sisu vaatamiseks õigusi",
            invalidWebmapSelectionAlert: "Valitud veebikaart ei sisalda ühtegi kasutamiseks sobivat kihti. Jätkamiseks lisage oma veebikaardile muudetav objektikiht.",
            invalidWebmapSelectionAlert2: "Lisateavet leiate teemast ${openLink}Mis on objektiteenus?${closeLink}",
            selectFieldsText: "Vali vormi väljad",
            selectThemeText: "Vali teemade hulgast",
            webmapText: "Veebikaart",
            layerText: "Kiht",
            detailsText: "Detailid",
            fieldsText: "Väljad",
            styleText: "Stiil",
            optionText: "Valikud",
            previewText: "Eelvaade",
            publishText: "Publitseeri",
            optionsApplicationText: "Valikud",
            titleText: "Koostaja",
            descriptionText: "GeoForm on konfigureeritav mall, mille abil saab vormipõhiselt muuta ${link1}objektiteenuse${closeLink} andmeid. Selle rakenduse abil saab andmeid sisestada mitte kaardi hüpikakna, vaid vormi kaudu ning kasutada ${link2}veebikaardi${closeLink} ja muudetavate objektiteenuste võimalusi. Kasutage oma GeoFormi kohandamiseks ja rakendamiseks järgmisi juhiseid.",
            btnPreviousText: "Eelmine",
            btnNextText: "Järgmine",
            webmapTabTitleText: "Vali veebikaart",
            viewWebmap: "Vaata veebikaarti",
            btnSelectWebmapText: "Vali veebikaart",
            btnSelectWebmapTextLoading: "Laadimine&hellip;",
            layerTabTitleText: "Vali muudetav kiht",
            selectLayerLabelText: "Kiht",
            selectLayerDefaultOptionText: "Vali kiht",
            detailsTabTitleText: "Vormi üksikasjad",
            detailTitleLabelText: "Pealkiri",
            detailLogoLabelText: "Logo pilt",
            descriptionLabelText: "Abitekst (valikuline)",
            fieldTabFieldHeaderText: "Väli",
            fieldTabLabelHeaderText: "Silt",
            fieldTabDisplayTypeHeaderText: "Kuva kui",
            selectMenuOption: "Vali menüü",
            selectRadioOption: "Raadionupp",
            selectTextOption: "Tekst",
            selectCheckboxOption: "Märkeruut",
            selectMailOption: "E-mail",
            selectUrlOption: "URL",
            selectTextAreaOption: "Tekstiala",
            previewApplicationText: "Kuva rakenduse eelvaade",
            saveApplicationText: "Salvesta rakendus",
            saveText: "Salvesta",
            toggleNavigationText: "Muuda navigeerimist",
            formPlaceholderText: "Minu vorm",
            shareBuilderInProgressTitleMessage: "GeoFormi publitseerimine",
            shareBuilderProgressBarMessage: "Palun oodake&hellip;",
            shareBuilderTitleMessage: "Õnnestus! Objekt salvestati",
            shareBuilderTextMessage: "Saate teistega jagamise kaudu hakata teavet koguma",
            shareModalFormText: "Vormi link",
            shareBuilderSuccess: "Teie GeoForm on uuendatud ja publitseeritud!",
            geoformTitleText: "Geo Form",
            layerTabText: "GeoForm koostatakse selle kihi põhjal. Kihiks peab olema objektiteenus, mida on lubatud muuta ning mis sisaldab sihtrühmale vastavaid jagamisõigusi.",
            detailsTabText: "Pealkirja kohandamiseks ning oma logo ja GeoFormi sihtrühma jaoks mõeldud lühikese kirjelduse lisamiseks kasutage allolevaid vormi üksikasjade välju. Kirjelduses saate lisada linke muudele ressurssidele, kontaktinfot ja isegi suunata oma sihtrühma veebikaardistusrakenduse juurde, mis sisaldab kõiki GeoFormi kaudu kogutud andmeid.",
            fieldsTabText: "Siin saate valida, millised väljad on teie GeoFormi sihtrühma jaoks nähtavad, muuta sihtrühma jaoks kuvatavaid silte ning lisada lühikese kirjelduse andmete sisestamise hõlbustamiseks.",
            styleTabText: "Saate allolevate teemade abil vastavalt oma eelistusele GeoFormi laadi muuta.",
            publishTabText: "Kui olete GeoFormi kohandamise lõpetanud, salvestage rakendus ja hakake seda oma sihtrühmaga jagama. Saate sellesse koosturisse igal ajal naasta ja tagasiside põhjal rakendust veelgi kohandada.",
            smallHeader: "Kasuta väikest päist",
            pushpinText: "Rõhknõel",
            doneButtonText: "Vaata rakenduse sisu",
            fieldTabPlaceHolderHeaderText: "Vihje (valikuline)",
            attachmentLabelText: "Manuse silt",
            attachmentLabelHint: "Andke kasutajatele teada, millist tüüpi faili manustada.",
            attachmentDescription: "Manuse kirjeldus",
            attachmentHint: "Vajadusel saate siin esitada täiendavad manuse juhised.",
            jumbotronDescription: "Bootstrap Jumbotron muudab teie rakenduse eesmärgi määramise lihtsaks. Selle saab mis tahes ajal keelata.",
            shareGeoformText: "Jaga Geoformi",
            shareDescription: "Jagamise paneeli abil saab teie sihtrühm edastuse järel GeoFormi kaastöölistega hõlpsalt jagada – selle saab mis tahes ajal keelata.",
            defaultMapExtent: "Vaikimisi kaardi ulatus",
            defaultMapExtentDescription: "Kaart lähtestatakse edastuse järel veebikaardi vaikeulatusele – selle saab mis tahes ajal keelata.",
            pushpinOptionsDescription: "Kaardi rõhknõela jaoks saate valida paljude värvide vahel, see peaks erinema kaardi sümboloogiast, et muuta edastuse kaardile asetamine kasutajale lihtsamaks",
            selectLocationText: "Vali asukoht",
            myLocationText: "Minu asukoht",
            searchText: "Otsi",
            coordinatesText: "Laius- ja pikkuskoordinaadid",
            usng: "USNG-koordinaadid",
            mgrs: "MGRS-koordinaadid",
            utm: "UTM-koordinaadid",
            selectLocationSDescription: "Lubage kasutajatel nende meetodite abil valida asukoht."
        }
    })
);
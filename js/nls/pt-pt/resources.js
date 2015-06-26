﻿define(
   ({
    map: {
      error: "Não foi possível criar mapa"
    },
    onlineStatus: {
      offline: "De momento, está a trabalhar em modo offline. Submissões de formulários serão guardadas localmente até que possa ser estabelecida uma ligação com o servidor",
      reconnecting: "Reconnecting&hellip;",
      pending: "${total} as edições pendentes serão submetidas quando for restabelecida uma ligação à rede."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "A Minha Organização",
          onlineLabel: "ArcGIS Online",
          contentLabel: "O Meu Conteúdo",
          favoritesLabel: "Os meus Favoritos"
        },
        title: "Selecionar Mapa Web",
        searchTitle: "Pesquisar",
        ok: "Ok",
        cancel: "Cancelar",
        placeholder: "Introduzir termo de pesquisa"
      },
      groupdlg: {
        items: {
          organizationLabel: "A Minha Organização",
          onlineLabel: "ArcGIS Online",
          contentLabel: "O Meu Conteúdo",
          favoritesLabel: "Os meus Favoritos"
        },
        title: "Selecionar Grupo",
        searchTitle: "Pesquisar",
        ok: "Ok",
        cancel: "Cancelar",
        placeholder: "Introduzir termo de pesquisa"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Aqui está uma ligação para um Geoform"
      }
    },
    user: {
      all: "Todas",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Avanço para norte",
      utm_easting: "Avanço para este",
      utm_zone_number: "Número de Zona",
      selectLayerTabText: "${formSection} Selecionar Formulário",
      geoFormGeneralTabText: "${formSection} Introduzir Informações",
      locationInformationText: "${formSection} Selecionar Localização",
      submitInformationText: "${formSection} Completar Formulário",
      submitInstructions: "Adicionar estas informações ao mapa.",
      myLocationText: "Localização Atual",
      locationDescriptionForMoreThanOneOption: "Especifique uma localização para esta entrada clicando/tocando no mapa ou utilizando uma das seguintes opções.",
      locationDescriptionForOneOption: "Especifique uma localização para esta entrada clicando/tocando no mapa ou utilizando a seguinte opção.",
      locationDescriptionForNoOption: "Especifique uma localização para esta entrada clicando/tocando no mapa.",
      addressText: "Pesquisar",
      geographic: "Lat/Lon",
      locationTabText: "Localização",
      locationPopupTitle: "Localização",
      submitButtonText: "Submeter Entrada",
      submitButtonTextLoading: "Submitting&hellip;",
      formValidationMessageAlertText: "Os seguintes campos são de preenchimento obrigatório:",
      selectLocation: "Por favor, escolha uma localização para a sua submissão.",
      emptylatitudeAlertMessage: "Por favor, introduza uma coordenada de ${openLink}latitude${closeLink}.",
      emptylongitudeAlertMessage: "Por favor, introduza uma coordenada de ${openLink}longitude${closeLink}.",
      shareUserTitleMessage: "Obrigado pela sua contribuição!",
      entrySubmitted: "A sua entrada foi submetida no mapa.",
      shareThisForm: "Partilhae Este Formulário",
      shareUserTextMessage: "Peça a outros que contribuam através das seguintes opções.",
      addAttachmentFailedMessage: "Não foi possível adicionar anexo à camada",
      addFeatureFailedMessage: "Não foi possível adicionar elemento à camada",
      noLayerConfiguredMessage: "Ocorreu um erro ao carregar ou editar uma camada de elementos editável. Para exibir o formulário e começar a recolher submissões, adicione uma Camada de Elementos editável ao Mapa Web.",
      placeholderLatitude: "Latitude (Y)",
      placeholderLongitude: "Longitude (X)",
      latitude: "Latitude",
      longitude: "Longitude",
      findMyLocation: "Localizar-me",
      finding: "Locating&hellip;",
      backToTop: "Regressar ao topo",
      addressSearchText: "A sua submissão aparecerá aqui. Pode arrastar o alfinete para corrigir a localização.",
      shareModalFormText: "Ligação ao Formulário",
      close: "Fechar",
      locationNotFound: "Não foi possível encontrar a localização.",
      setLocation: "Definir Localização",
      find: "Encontrar endereço ou local",
      attachment: "Anexo",
      toggleDropdown: "Alternar Lista Pendente",
      invalidString: "Por favor introduza um valor válido.",
      invalidSmallNumber: "Por favor introduza um válido ${openStrong}integer${closeStrong} valor entre -32768 e 32767.",
      invalidNumber: "Por favor, introduza um valor ${openStrong}integer${closeStrong} entre -2147483648 e 2147483647.",
      invalidFloat: "Por favor, introduza um valor ${openStrong}floating point${closeStrong}.",
      invalidDouble: "Por favor, introduza um valor ${openStrong}double${closeStrong} value.",
      invalidLatLong: "Por favor, introduza coordenadas de latitude e longitude válidas.",
      invalidUTM: "Por favor, introduza coordenadas UTM válidas.",
      invalidUSNG: "Por favor, introduza coordenadas USNG válidas.",
      invalidMGRS: "Por favor, introduza coordenadas MGRS válidas.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Select&hellip;",
      applyEditsFailedMessage: "Lamentamos, não foi possível submeter a sua entrada. Por favor, tente novamente.",
      requiredFields: "O seguinte campo é necessário. Por favor forneça uma entrada válida.",
      requiredField: "(exigido)",
      error: "Erro",
      textRangeHintMessage: "${openStrong}Hint:${closeStrong} valor Mínimo ${minValue} e valor Máximo ${maxValue}",
      dateRangeHintMessage: "${openStrong}Hint:${closeStrong} Data Mínima ${minValue} e Data Máxima ${maxValue}",
      remainingCharactersHintMessage: "${value} caracteres remanescentes",
      mapFullScreen: "Ecrã Inteiro",
      mapRestore: "Restaurar",
      filterSelectEmptyText: "Selecionar",
      invalidLayerMessage: "A camada de formulário não existe. Por favor, configure a aplicação e defina a camada.",
      selectedLayerText: "Todos",
      fileUploadStatus: "Estado do carregamento do ficheiro",
      uploadingBadge: "&nbsp;Uploading&hellip;",
      successBadge: "&nbsp;Uploaded",
      retryBadge: "Tentar Novamente",
      errorBadge: "Erro ao carregar&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "O ficheiro é demasiado grande para anexar",
      exceededFileCountError: "Excedeu o mácimo de número de anexos permitidos",
      selectFileTitle: "Selecionar um ficheiro",
      btnSelectFileText: "Seleccionar Ficheiro",
      btnViewSubmissions: "Visualizar Submissões"
    },
    builder: {
      gettingStarted: "Começar",
      dateSettings: "Definições de Data",
      hiddenDateField: "Ocultar este campo de data",
      preventPastDates: "Prevenir datas passadas",
      preventFutureDates: "Prevenir datas futuras",
      useCurrentDate: "Defina este campo com a data e tempo actuais",
      configure: "Configurar",
      configureField: "Configurar Campo \'${fieldName}\'",
      invalidUser: "Lamentamos, mas não tem permissão para visualizar este item",
      invalidWebmapSelectionAlert: "O mapa web selecionado não contém uma camada válida para utilizar. Por favor, adicione uma Camada de Elementos editável ao seu mapa web para continuar.",
      invalidWebmapSelectionAlert2: "para obter mais informações, consulte ${openLink}O que é um Serviço de Elementos?${closeLink}",
      selectFieldsText: "Selecionar Campos de Formulário",
      selectThemeText: "Selecionar tema de Formulário",
      setViewerText: "Configurar Visualizações",
      introText: "Iniciar",
      webmapText: "Mapa Web",
      layerText: "Camada",
      detailsText: "Detalhes",
      fieldsText: "Campos",
      styleText: "Estilo",
      viewerText: "Viewer",
      optionText: "Opções",
      previewText: "Pré-visualizar",
      publishText: "Publicar",
      optionsApplicationText: "Opções",
      titleText: "Builder",
      descriptionText: "GeoForm é um modelo configurável para a edição de dados com base num formuláriode um ${link1}Serviço de Elementos${closeLink}. Esta aplicação permite aos utilizadores introduzir dados através de um formulário ao invés de uma janela pop-up de mapa, aproveitando as potencialidades do ${link2}Mapa Web${closeLink} e Serviços de Elementos editáveis. Siga as seguintes etapas para personalizar e implementar o seu GeoForm.",
      btnPreviousText: "Anterior",
      btnNextText: "Seguinte",
      webmapTabTitleText: "Selecionar um Mapa Web",
      viewWebmap: "Visualizar mapa web",
      webmapDetailsText: "O mapa web selecionado é ${webMapTitleLink}${webMapTitle}${closeLink}. Para selecionar outro mapa web, clique no boão \'Selecionar Mapa Web\'",
      btnSelectWebmapText: "Selecionar Mapa Web",
      btnSelectWebmapTextLoading: "Loading&hellip;",
      layerTabTitleText: "Seleccionar Camadas Editáveis",
      selectLayerLabelText: "Camada",
      selectLayerDefaultOptionText: "Selecionar Camada",
      enableBasemapToggle: "Mostrar Mapa base Toggle",
      enableBasemapToggleDescription: "Pode configurar o GeoForm para Mostrar/Ocultar o Mapa base Toggle",
      defaultBasemap: "Alternar Mapas Base",
      secondaryBasemap: "Mapa Base Padrão",
      detailsTabTitleText: "Detalhes do Formulário",
      detailTitleLabelText: "Título",
      detailLogoLabelText: "Imagem do Logo",
      descriptionLabelText: "Instruções e Detalhes do Formulário",
      fieldDescriptionLabelText: "Texto de Ajuda (opcional)",
      fieldDescriptionHelpText: "Forneça uma descrição curta ou instruções para este campo.",
      fieldHintHelpText: "Texto de espaço reservado para o campo.",
      fieldTabFieldHeaderText: "Campo",
      fieldTabLabelHeaderText: "Rótulo",
      fieldTabDisplayTypeHeaderText: "Exibir como",
      fieldTabOrderColumnText: "Ordenar",
      fieldTabVisibleColumnText: "Ativado",
      displayFieldText: "Exibir Campo",
      selectMenuOption: "Selecionar Menu",
      selectRadioOption: "Botão de Rádio",
      selectTextOption: "Texto",
      selectDateOption: "Seletor de Data",
      selectRangeOption: "Touch-Spinner",
      selectCheckboxOption: "Caixa de Seleção",
      selectMailOption: "Correio Eletrónico",
      selectUrlOption: "URL",
      selectTextAreaOption: "Área de Texto",
      previewApplicationText: "Pré-visualizar Aplicação",
      saveApplicationText: "Guardar Aplicação",
      saveText: "Guardar",
      toggleNavigationText: "Alternar navegação",
      formPlaceholderText: "O Meu Formulário",
      shareBuilderInProgressTitleMessage: "A publicar o GeoForm",
      shareBuilderProgressBarMessage: "Por Favor, Aguarde&hellip;",
      shareBuilderTitleMessage: "Sucesso! Item Guardado",
      shareBuilderTextMessage: "Pode começar a recolher informações partilhando com outros",
      shareModalFormText: "Ligação ao Formulário",
      shareBuilderSuccess: "O seu GeoForm foi atualizado e publicado!",
      geoformTitleText: "Geo Form",
      layerTabText: "Esta é a camada que o GeoForm será construido apartir de. A camada deve ser um serviço de elemento que está activado para edição com permissões de partilha apropriadas à sua audiencia. Se todas as camadas forem seleccionadas, o formulário ira permitir ao utilizador escolher qual a camada de formulário à qual submeter.",
      detailsTabText: "Utilize as caixas de detalhes do formulário abaixo para personalizar o Título, adicionar um logo personalizado e fornecer uma descrição curta para o público do seu GeoForm. Na descrição, pode adicionar ligações para outros recursos, informações de contato e até dirigir o seu público para uma aplicação de cartografia com todos os dados recolhidos com o GeoForm.",
      fieldsTabText: "Aqui pode selecionar os campos que ficarão visíveis para o público do seu GeoForm, editar os Rótulos que irão visualizar e adicionar uma Descrição curta para ajudar na introdução de dados.",
      styleTabText: "Configure o estilo do seu GeoForm utilizando os temas abaixo com base nas suas preferências.",
      viewerTabText: "Definir opções para visualizar submissões recolhidas do GeoForm.",
      publishTabText: "Se concluiu a personalização do seu geoForm, guarde a aplicação e comece a partilhar com o seu público. Pode sempre regressar a este builder e continuar a personalizá-lo com base no feedback recebido.",
      headerSizeLabel: "Tamanho do Cabeçalho",
      smallHeader: "Utilizar Cabeçalho Pequeno",
      bigHeader: "Utilizar Cabeçalho Grande",
      pushpinText: "Alfinete",
      doneButtonText: "Guardar e Sair",
      fieldTabPlaceHolderHeaderText: "Pista (opcional)",
      enableAttachmentLabelText: "${openStrong}Ativar Anexos${closeStrong}",
      enableAttachmentLabelHint: "Pode ativar/desativar os anexos aqui",
      attachmentIsRequiredLabelText: "${openStrong}Anexos ${closeStrong}",
      attachmentIsRequiredLabelHint: "Casos eja necessário, os utilizadores podem ser instados a  introduzir um anexo.",
      attachmentLabelText: "Rótulo do Botão de Anexo",
      attachmentLabelHint: "Este texto aparecerá ao lado do Botão de Anexo. pode utilizar este espaço para descrever o que gostaria que o seu público anexasse (fotografia, vídeo, documento, etc.), o formato do ficheiro que pretende ( .jpeg, .png, .docx, .pdf, etc.), bem como quaisquer instruções adicionais",
      attachmentDescription: "Descrição de Anexo",
      attachmentHint: "Se necessário, pode fornecer instruções adicionais de anexo aqui.",
      jumbotronDescription: "Utilize um cabeçalho grande ou pequeno no seu formulário. Um cabeçalho grande pode ajudar a definir o propósito da sua aplicação, mas ocupa mais espaço na sua janela",
      shareGeoformText: "Botões de partilha de plataformas sociais",
      shareDescription: "Botões de plataformas sociais permitem que a sua audiencia partilhe facilmente o seu GeoForm uma vez que tenham feito uma submissão.",
      defaultMapExtent: "Extensão Padrão do Mapa",
      defaultMapExtentDescription: "O mapa será trdrfinido para a extensão por defeito no seu mapa web após a submissão - isto pode ser desativado a qualquer momento.",
      pushpinOptionsDescription: "Escolha de entre várias cores para o alfinete do mapa, este deverá ser de cor diferente da simbologia do mapa para ajudar o utilizador a colocar a sua submissão no mapa",
      selectLocationText: "Selecionar Localização Por",
      myLocationText: "A Minha Localização",
      searchText: "Pesquisar",
      coordinatesText: "Coordenadas de Latitude e Longitude",
      usng: "Coordenadas USNG",
      mgrs: "Coordenadas MGRS",
      utm: "Coordenadas UTM",
      selectLocationSDescription: "Permita aos utilizadores selecionar uma localização através dos seguintes métodos.",
      dragTooltipText: "Arraste o campo para onde pretende que apareça",
      showHideLayerText: "Exibir Camada",
      showHideLayerHelpText: "Pode configurar o GeoForm para Mostrar/Ocultar a Camada. Esta opção apenas se aplica às definições de camada única.",
      labelHelpMessage: "Rótulo",
      placeHolderHintMessage: "Texto de Pista",
      placeHolderHelpMessage: "Texto de Ajuda",
      selectTextOptionValue: "Seleção de Filtro",
      disableLogo: "Desativar Logo",
      disableLogoDescription: "Pode configurar o GeoForm para Exibir/Ocultar o Logo no cabeçalho do formulário",
      locateOnLoadText: "Localizar ao Carregar",
      locateOnLoadDescription: "Pode configurar o GeoForm para utilizar a localização atual ao carregar a página",
      selectLayerFieldTabText: "Selecionar Camada",
      allLayerSelectOptionText: "Todas as Camadas",
      disableViewer: "Desativar Visualizador",
      disableViewerDescription: "Pode configurar o GeoForm para mostrar/ocultar o visualizador",
      displayFieldHintText: "Seleccione campo de exibição para mostrar o visualizador como um título"
    },
    viewer: {
      geocoderCancelText: "Cancelar",
      viewMapTabText: "Mapa",
      sortHeaderText: "Ordenar por:",
      geocoderPlaceholderText: "Código Postal, cidade, etc.",
      noSearchResult: "Não foram encontrados resultados",
      recordsTabTooltip: "Visualizar Submissões",
      legendTabTooltip: "Legenda",
      aboutUsTabTooltip: "Sobre Nós",
      mapTabTooltip: "Mapa",
      btnDescendingText: "Desc",
      btnAscendingText: "Asc",
      geometryUnavailableErrorMessage: "Erro a descobrir a geometria no elemento",
      infoPopupOffErrorMessage: "Sem informação para exibir",
      btnLoadMoreText: "Carregar Mais",
      unavailableTitleText: "Sem Título",
      unavailableConfigMessage: "Não foi possível carregar configuração",
      share: "Partilhar",
      viewReportsTabText: "Relatórios",
      viewLegendTabText: "Legenda",
      viewAboutusTabText: "Sobre",
      btnSubmitReportText: "Submeter um Relatório",
      appLoadingFailedMessage: "Existe um erro ao carregar o visualizador"
    }
  })
);
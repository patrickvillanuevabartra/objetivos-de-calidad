/* ============================================================================
 *  CONFIG.JS — Matriz Plan de Acción de Objetivos de Calidad
 *  Facultad de Ingeniería URP · SGOE ISO 21001
 *
 *  Mismo patrón que Indicadores y Riesgos: todos los IDs de QuintaDB viven
 *  aquí. Si mañana cambian las tablas, este es el único archivo a tocar.
 *
 *  ESTADO: tabla principal mapeada y verificada contra QuintaDB.
 *          Faltan las dos tablas hijas (ver bloque PENDIENTE al final).
 * ========================================================================= */

const CONFIG = {

  // Proxy en Cloudflare Workers (el mismo de Indicadores y Riesgos).
  PROXY_URL: "https://proxy-quintadb.patrick-villanueva.workers.dev/",
  PROXY_TOKEN: "",

  APP_ID: "bxW5nYl8nlkOokW4JcMfb2",

  // ==========================================================================
  //  TABLA PRINCIPAL — Matriz plan de acción de objetivos de calidad
  // ==========================================================================
  MATRIZ: {
    ENTITY_ID: "cUgSoAkmncWRK2iHdcKYCp",

    // ---- Escribibles por REST -------------------------------------------
    // (texto, fecha y lista desplegable: confirmados como escribibles)
    F: {
      objetivo:      { id: "c7f1ndW5XcOOoWW67cSx8j", type: "text", col: "Objetivo del sistema de gestión de la calidad" },
      actividades:   { id: "bjWQhcPwHhlioRW5XJWPyh", type: "text", col: "Actividades a realizar" },  // RTE
      recursos:      { id: "c1W6BcSq5gW6ldN8oOhCov", type: "text", col: "Recursos requeridos" },  // RTE
      indicador:     { id: "ddKmoCi8nni5pdLmkepSkH", type: "text", col: "Indicador" },  // obligatorio
      formula:       { id: "dcSCoKW5TgW7GCaslcUmkg", type: "text", col: "Fórmula" },
      meta:          { id: "ddShmrWODaWQSxWPeGAfKI", type: "text", col: "Meta" },
      fi_meta:       { id: "ddQSkFW7HmBztdM8kBWPWZ", type: "date", col: "F.I. Meta" },  // obligatorio
      fv_meta:       { id: "ddRHWlW5vcU5lcM8kOWRvA", type: "date", col: "F.V. Meta" },  // obligatorio
      condicion:     { id: "a_xSkfWQXcG4olu8kkW60k", type: "select", col: "Condición" } // obligatorio
    },

    // ---- Relaciones: NO escribibles por REST -----------------------------
    // Se leen para mostrar, pero el aplicativo escribe en los espejos planos.
    REL: {
      periodo:              { id: "ckWOP9sIfiWQ3dGSkJo3HF", req: true },
      compromisos_politica: { id: "cNW5dcS8nfjOosW7ddJSoK", req: true },
      estrategia:           { id: "cjW48oqLjdVO3cP8kUWQ52" },
      proceso_n0:           { id: "dcRwFdOSjbhPfEueS8aSoc" },
      proceso_n1:           { id: "dcISo8W7XmAOkoqKVdJIGj", req: true },
      proceso_n2:           { id: "byWQ5dtSjnm6hdPmkwFKWI" },
      proceso_n3:           { id: "cWjSknefDntBS2oCkGWPqV" },
      oficina:              { id: "cNW7RdTmjeW41DBZJcQHe9", req: true },
      responsable_proceso:  { id: "dcQJ0zh8jhmyxdJKbhW7WP", req: true },
      responsable_tecnico:  { id: "ddUvnbWOfhkOo2W7JdGSoX" }
    },

    // ---- Columnas relacionadas: SOLO LECTURA ------------------------------
    // Todas apuntan mal en QuintaDB (formula_field -> campo Objetivo, sin
    // operación). No sirven como fuente: se recalculan en el cliente.
    RO: {
      objetivo_estrategico:    "ddMhmMjNvczyo1WPJdVH8T",
      correo_resp_proceso:     "b6WRhcN8neW4eiWRhdVM0O",
      celular_resp_proceso:    "cuWRmtwCnhEioplCkpW4Ly",
      correo_resp_tecnico:     "aRoCoMWRHdNB_cJbHaiSk4",
      celular_resp_tecnico:    "bcW7GzmSjjW6tdNqeUW495",
      progreso_objetivo:       "aCoh3cNCnnW4tdPCo2WRmH"   // ← roto, recalculado
    },

    // ---- Registros vinculados (tablas hijas) ------------------------------
    LINK: {
      hitos:    "c-smkkz3rkbAJdJSkSWOz6",
      reportes: "dcQs5PC8jlDzVdMYBdL8oD"
    },

    // ---- Fórmulas de QuintaDB: IGNORADAS ----------------------------------
    // Solo 5 de 20 tienen fórmula real; el resto no opera nada. Se listan
    // para poder leer valores históricos, nunca para calcular.
    FORMULA_IGNORADA: {
      estado_objetivo:        "atcs_cJXjdW7RcUWtdS8kk",
      cumplimiento_en_curso:  "cEWOVdLqXavOkfWRbhy8o2",
      n_cumplidos:            "cGxSkiwSjkWO3dT8kjWOXf",
      n_no_cumplidos:         "c0W6ldOCjnA4otW45YpCku",
      total_objetivos:        "dcOYOOW51cSOofW7VdVgOR",
      n_vencidos:             "dcNxytyL9cT4ozDCkxW6nc",
      n_criticos:             "dcKSk4quvpWPXhW4HLWR9j",
      n_por_vencer_30:        "cBW7nPW4vcMiocWOzFWOec",
      n_avance_bueno:         "ddL0mkg3ndPyktW6tdVSkP",
      dias_vencidos:          "ddVveeW5HicikzWQ0UWOH5"
    }
  },

  // ==========================================================================
  //  PENDIENTE — completar tras correr el descubridor
  // ==========================================================================
  // ==========================================================================
  //  TABLA HIJA — Hitos
  // ==========================================================================
  HITOS: {
    ENTITY_ID: "dcTSkMWQ9dUjTwW6ldJSkf",

    // ---- Escribibles por REST (los únicos 5) ------------------------------
    F: {
      hito:              { id: "cmW67cJSnlW7BcKhb-oZi9", type: "string", col: "Hito" }, // oblig.
      pct_participacion: { id: "dcImoDW5bcL4oaW7Tibmk8", type: "float", col: "% participación"  }, // oblig.
      fi_hito:           { id: "buWPVcI3TdM4o7WOCqECoJ", type: "date", col: "F.I. hito"   }, // oblig.
      fv_hito:           { id: "ddKKxdShHcQOVcMrJdMM08", type: "date", col: "F.V. hito"   }, // oblig.
      costo:             { id: "cSWQrkCgPcJikSWPFdMuSu", type: "float", col: "Costo"  }
    },

    // ---- Relaciones: NO escribibles por REST ------------------------------
    REL: {
      // ¡Este es el vínculo al objetivo padre! Sin espejo plano, el hito
      // nace huérfano y se rompe todo el cálculo de progreso.
      objetivo_padre:      { id: "cMcwu5rSjjtR1BuSoMWQfZ", req: true },
      oficina:             { id: "csWP7cHSjnjOhdRSojWRH-", req: true },
      responsable_proceso: { id: "ccW49UEL1cRio5W5ddNSke", req: true },
      responsable_tecnico: { id: "bGnvFcKNbdNjD5otq9hSke" }
    },

    // ---- Columnas relacionadas: SOLO LECTURA (todas rotas) ----------------
    RO: {
      objetivo_calidad: "crW6nwBmndW7NdS0_dLq5y",
      meta:             "c3W7ldVCngfykKgH8oWR5U",
      fi_meta:          "dcLtRcU8jkc6BdQ38gW5Gj",
      fv_meta:          "c0W4pdQmjfW4dcUXhdMmke",
      progreso_hito:    "aHWQtcPSjgCyoKWOqxB3qi"
    },

    // ---- Registros vinculados (hijos del hito) ----------------------------
    // Dos enlaces distintos. Falta confirmar si son la misma tabla de
    // reportes vista dos veces, o dos tablas separadas.
    LINK: {
      progreso_por_avance: "cDWQ45W6fbpikVj1ldSmoA",
      reporte_avance:      "dcPmohqInipyoEDvhcOr4f"
    },

    // ---- Fórmulas rotas: IGNORADAS ----------------------------------------
    FORMULA_IGNORADA: {
      error_fecha_vencimiento: "dcQHXXbIXcGOkWWQNcImoO",
      estado:                  "ddLW3cKbbdROVdULuxfmov",
      cumplimiento_en_curso:   "ddTvFdQSnmhOkEW4TYWRGC",
      dias_vencidos:           "dcV2KYy8nnW4tdIqFdGs1R",
      progreso_objetivo:       "atWRipiCnfW40XW5tcTCkV",
      criterio_vencido:        "aUWRi-W5LhW7_dKuuCWO5Y",
      criterio_por_vencer:     "crW5LNWPfcPikun29VA05E"
    },

    // Campo de texto plano: guarda el _qid del objetivo padre.
    // Es lo que sostiene toda la jerarquía.
    ESPEJO: { objetivo_ref: { id: "ddUq7cSCjjW4ldUhy-WPer", type: "string", col: "Objetivo ref" } },

    // El responsable técnico del hito NO tiene espejo propio: se hereda
    // del objetivo. Si más adelante hace falta que varíe por hito, se
    // agregan 3 campos (nombre, correo, celular) sin tocar nada más.
    respTecnicoHeredado: true
  },

  // ==========================================================================
  //  TABLA HIJA — Reporte de avances
  //  Una sola tabla, enlazada 3 veces (2 desde Hitos, 1 desde Matriz).
  // ==========================================================================
  REPORTES: {
    ENTITY_ID: "ddIxBcLdHhii7dUmo6isCf",

    // ---- Escribibles por REST ---------------------------------------------
    F: {
      fecha_ejecucion:  { id: "coAMD6WR1cGiPaWQ7cNb5O", type: "date", col: "Fecha de ejecución o reporte"  }, // oblig.
      avance:           { id: "afWPRdKaHcTQqaW5emyZGZ", type: "text", col: "Avance (descripción)"  }, // oblig. RTE
      estado_hito:      { id: "dcK0BcGmnfW5jnkSo9nCkM", type: "radio", col: "Estado del hito" }, // oblig.
      contribucion:     { id: "cTtSkeyKXeWQRdKSkJFCkM", type: "float", col: "Contribución al progreso del hito" }, // oblig.
      dificultades:     { id: "ddRhNcJCjcWOJdJZxcJmof", type: "text", col: "Dificultades"  },
      observacion:      { id: "bxdCk5W49hAkBcRIBdRCky", type: "text", col: "Observación"  }
    },

    // Literales EXACTOS del radio. Mandar con esta capitalización o se
    // rechaza. (El Excel usa "En proceso" en minúscula: no coincide.)
    ESTADOS: ["En Proceso", "Ejecutado"],

    // ---- Relaciones: NO escribibles por REST ------------------------------
    REL: {
      objetivo_padre:      { id: "a3W5T3W51dwOoXW6C2hMrm" }, // -> MATRIZ
      hito_padre:          { id: "ddTfDOzdPcROouWPFdJtL-" }, // -> HITOS
      oficina:             { id: "axW6JcTmnlWQ5XWQiAW50n" }
    },

    // ---- Columnas relacionadas: SOLO LECTURA (todas rotas) ----------------
    RO: {
      objetivo_calidad: "bcAtJcPmjdA4kxWOFcUgeH",
      meta:             "cBkZrAbCjkWR8IjSk1cSoJ",
      fi_meta:          "bKWOfgW6PawBXLb8k3W5P4",
      fv_meta:          "ciW7eiW7neW6vkvf_cVSok",
      fi_hito:          "bBW4DOW4nibj3cGsldVmk9",
      fv_hito:          "bEW5zFW41dKlJcR8oOr8ku"
    },

    // ---- Campo Archivo: no usable por REST desde el navegador -------------
    // Se conserva para carga manual en la vista nativa de QuintaDB.
    ARCHIVO: "a7cCkavgfcVOkNdSodCmkS",

    // ---- Subformulario: cuarto nivel --------------------------------------
    // Subform REAL: se escribe con json_subforms_values, así que no
    // necesita campo espejo de vínculo. El único hijo que se salva.
    SUBFORM: {
      proximas_acciones: {
        id: "cGW4JcMmnhW5TpmSkbnCog",
        ENTITY_ID: "ddN0pdVSnov6RcUCoOWRjR",
        F: {
          accion:       { id: "c1CSk4WQbpEiolDqS-xs8-", type: "text", col: "Próxima acción"   },
          responsable:  { id: "ddTaBdNCjlvzXFf8k3WQKf", type: "string", col: "Responsable" },
          fecha_venc:   { id: "dcG8oPW4bcHyo-kCk5pbHs", type: "date", col: "Fecha de vencimiento"   },
          articulacion: { id: "dcN0DjW5XcO6VdKCkPWRr-", type: "text", col: "Necesidades de articulación"   },
          observacion:  { id: "afWR7cLw9lW4RdOCkLu8oG", type: "text", col: "Observación"   }
        },
        // Campo Archivo: no escribible por REST. Sin espejo por decisión
        // de diseño (la evidencia multi-enlace vive en el reporte padre).
        ARCHIVO: "awoCkldW1cLQH3Aev3W4LW"
      }
    },

    // Campos de texto plano que sostienen la jerarquía y las evidencias.
    ESPEJO: {
      objetivo_ref:       { id: "c3u2qUorLdLBjzaNFdNCof", type: "string", col: "Objetivo ref" },  // _qid del objetivo
      hito_ref:           { id: "dcK8oXbJzcuRxdQh3cLCoO", type: "string", col: "Hito ref" },  // _qid del hito
      evidencias_enlaces: { id: "c5W751WQvdK4ogW4xcPmk-", type: "text", col: "Evidencias (enlaces)"   }   // JSON [{etiqueta, url}]
    }
  },

  // ==========================================================================
  //  USUARIOS — tabla compartida con la Matriz de Indicadores
  //  PENDIENTE decidir: reusarla (usuarios ya cargados, pero los roles
  //  se comparten entre matrices) o crear una propia.
  // ==========================================================================
  USUARIOS: {
    ENTITY_ID: "aNDhddT0PnW7PLW5tcJwLP",
    // La lectura va por NOMBRE de columna (QuintaDB con name_value=1).
    F: {
      usuario:  { id: "baCMPTW5zhv5pcVIVcKSkQ", type: "string", col: "Usuario" },
      password: { id: "dcS1xdTCjivyoEWQVdSCoy", type: "string", col: "Contraseña" },
      rol:      { id: "ddRmknWQbcTO0qW4Tyz8oV", type: "select", col: "Rol" },
      oficina:  { id: "aTcmohWOLgWO_dHCo6x1SJ", type: "string", col: "Oficina asignada" },
      activo:   { id: "bRxCofW6HhpBP5rCkdiwuZ", type: "select", col: "Activo" },
      nombre:   { id: "bZCCoBWRXcSQhdJapdTCoY", type: "string", col: "Nombre completo" }
    },
    ROLES: ["Administrador", "Gestor", "Oficina", "Usuario libre"]
  },

  // ==========================================================================
  //  CATÁLOGOS — tablas de las que se leen los desplegables
  //  Extraídos del `default` de cada campo rel (QuintaDB guarda ahí el
  //  ENTITY_ID de destino). Los de procesos y responsable de proceso son
  //  COMPARTIDOS con la Matriz de Indicadores.
  //
  //  `label`  = campo del que sale el texto de la opción.
  //  `codigo` = campo de código corto, si existe (se muestra como prefijo).
  //  `filtro` = { campo, catalogo } cuando las opciones dependen de otra
  //             selección previa.
  //
  //  NO autodetectar el label: en Estrategias el primer campo no-relación
  //  es "Código estrategia" (E1…E25) y se llenaría el desplegable con
  //  códigos en vez de texto. Todos los labels van explícitos.
  //
  //  Varios catálogos tienen un rel de vuelta a la matriz (la relación es
  //  bidireccional en QuintaDB). Ese campo NO es dato: se descarta.
  // ==========================================================================
  CATALOGOS: {
    periodos: {
      entity: "c9W5DoACjaWROpW6uAAaHm",
      label:  "c0rCode3LnW5fvmqvnWQia", col: "Periodo"   // string, único campo de la tabla
    },
    politica_calidad: {
      entity: "cufJtdJCjnbyouC3qOCSkx",
      label:  "c-bSo7DZLihRRdMmoqyLuv", col: "Política de calidad"
    },
    estrategias: {
      entity: "aZW5TeW5bcIikKkx3cHe4T",
      label:  "csWRVcMv1cUPldOrZdUCkX", col: "Estrategia",
      codigo: "cUvsSwdv1dNyfZW53dTsje", colCodigo: "Código estrategia",
      colPeriodo: "Periodo", colHijo: "Objetivos estratégicos",          // select E1…E25
      filtro: { campo: "cmW4P9WQDdPOkqW7pcQxXN", catalogo: "periodos" },
      // Una estrategia arrastra sus objetivos estratégicos:
      hijo:   { campo: "bcW5HxWRbdNikWWRNdOCo4", catalogo: "objetivos_estrategicos" },
      relInverso: "aPb8k3gSjgWRvZW5tdMCkN"       // ignorar al leer opciones
    },
    objetivos_estrategicos: {
      entity: "c_aKz4e8jdW5BcTSoXsSoX",
      label:  "cWWPVdV8nneOkOmSoth8o3", col:       "Objetivos estratégicos",
      codigo: "bMWQZdTSnjfzxcJJFdN8k7", colCodigo: "Código OE",
      // El espejo guarda "O1: texto". Varios se unen con espacio,
      // tal como aparecen hoy concatenados en el Excel de origen.
      formato: "{codigo}: {label}"
    },
    // ---- Procesos: NO se leen de NIVEL0–NIVEL3 --------------------------
    // Esas tablas quedaron desactualizadas tras la migración de Indicadores
    // (v49): al renombrar o renumerar desde el inventario no se sincronizan.
    // La fuente de verdad es el INVENTARIO (tabla PROCEDIMIENTO), campo
    // "Ruta completa", del que se derivan N0…N3 partiendo la cadena.
    // Los 4 rel de proceso de la matriz quedan como legado: ni se leen
    // ni se escriben. Solo se usa el espejo `Proceso (ruta)`.
    inventario_procesos: {
      entity: "dcUCouymnkz4ovWRVdOmk0",   // = PROCEDIMIENTO en el config de Indicadores
      ruta_completa: "cIWOeqW6vkuildQSkfW4WT", colRuta:      "Ruta completa",
      archivado:     "cGoSkYwSnnWPj6W7tcHSoK", colArchivado: "Estado del registro",
      codigo:        "dcVSkHkSnhl5iaW7uMqCox", colCodigo:    "Código \"Procedimiento\"",
      nombre:        "coi8oUW41cMOk7cCk2W4vk", colNombre:    "Procedimiento",
      // `Estado del registro` es texto libre: puede traer variantes de
      // escritura. Filtro tolerante hasta confirmar los valores reales.
      archivadoRegla: { normalizar: true, descartarSiContiene: "archiv" },
      // Los Código "Nivel 0/1/2/3" de esta tabla son linked_column rotos
      // (se apuntan en cadena, sin operación). Los códigos por nivel se
      // derivan partiendo la ruta completa.
      codigosNivelRotos: ["ccECkhW4rcS4kUW6pdMmkL", "dcHCkGW75jWPJdJSkQhcC_", "csdCoXrCjmW7RdItzbhmks", "ddK11hC8nbFyo5W755WPzf"]
    },
    legado_no_usar: {
      procesos_n0: "czzdJdKmjnWPSYbSk7v8ot",
      procesos_n1: "bjW7pcICjogOowWR_cISkf",
      procesos_n2: "csA8ocWP1eW5aaW6lcUCkM",
      procesos_n3: "dcRNhdP8ngEixcV8kmWP5v"
    },

    // Las oficinas NO salen del rel a cXW7_dOCnctOlcRSo6W4LK (esa tabla es
    // RESPONSABLES: personas, no unidades). El listado canónico del SGOE es
    // el desplegable `oficina_medicion` de la Matriz de Indicadores.
    // Se replica aquí para que ambas matrices usen los mismos nombres.
    oficinas: {
      fuente: "lista_fija",
      // Correcciones aplicadas respecto del listado de Indicadores:
      //  - "Escuelas profesionales" venía con el lema institucional pegado
      //  - "Taller de Metal Mecánica" -> "Taller de Metalmecánica" (como Riesgos)
      opciones: [
        "Biblioteca Especializada",
        "Biblioteca Virtual",
        "Centro de Prácticas y Desarrollo Profesional",
        "CITDEL",
        "Comisión Consultiva",
        "Comisión de Evaluación Curricular",
        "Comité SGOE",
        "Consejo de Facultad",
        "Coordinación Relaciones Universitarias",
        "Decanato",
        "Defensoría Universitaria",
        "Departamento Académico de Ingeniería",
        "Escuela Profesional de Ingeniería Civil",
        "Escuela Profesional de Ingeniería Electrónica",
        "Escuela Profesional de Ingeniería Industrial",
        "Escuela Profesional de Ingeniería Informática",
        "Escuela Profesional de Ingeniería Mecatrónica",
        "Escuelas profesionales",
        "Laboratorio CIM",
        "Laboratorio Circuitos y Dispositivos",
        "Laboratorio Control",
        "Laboratorio de Cómputo",
        "Laboratorio de Ingeniería de Métodos",
        "Laboratorio de Mecatrónica",
        "Laboratorio de Procesos de Manufactura",
        "Laboratorio de Química",
        "Laboratorio Sistemas Digitales",
        "Laboratorio Telecomunicaciones",
        "Oficina Central de Registros y Matrícula",
        "Oficina Central de Seguimiento del Egresado y Empleabilidad - OCSEE",
        "Secretaría Académica",
        "Taller de Construcción",
        "Taller de Metalmecánica",
        "Unidad de Calidad y Acreditación Académica",
        "Unidad de Extensión Cultural y Proyección Social",
        "Unidad de Grados y Títulos",
        "Unidad de Grados y Títulos - TITES",
        "Unidad de Investigación",
        "Unidad de Planificación",
        "Unidad de Producción de Bienes y Prestación de Servicios",
        "Unidad de Registros y Matrícula",
        "Unidad de Servicios Administrativos",
        "Unidad de Tutoría y Asesoría Académica"
      ],
      relLegado: "cXW7_dOCnctOlcRSo6W4LK"   // no usar como catálogo
    },
    // Tabla de unidades/oficinas. La etiqueta se detecta sola: primer campo
    // de texto que no sea un ID. Se usa para resolver las relaciones.
    unidades: {
      entity: "cXW7_dOCnctOlcRSo6W4LK",
      label:  null
    },
    responsables_proceso: {
      entity:  "cPW44qr3vlW6XMn01eWPiv",
      label:   "bZW65VW5jdJ6rOiSkpWO40", col:        "Responsable proceso",
      correo:  "cGh8oRW7TcV6pcOSkhWQfs", colCorreo:  "Correo electrónico responsable proceso",
      celular: "c1WQqQWOvmhOozqSoMW5m2", colCelular: "Celular responsable proceso",
      // Relación a la tabla de unidades. Devuelve el ID del registro, no texto.
      colUnidad: "Unidad responsable",
      // Su campo `Unidad responsable` apunta a cXW7_dOCnctOlcRSo6W4LK,
      // lo que confirma que esa tabla es de UNIDADES, no de personas.
      // (En el config de Indicadores está mal etiquetada como RESPONSABLES.)
      unidad: { campo: "adcSoUWOncJlBdVmorgrS4", entity: "cXW7_dOCnctOlcRSo6W4LK" }
    },
    responsables_tecnicos: {
      entity:  "ddOCoDW51dSikTWP3dVSoL",
      label:   "bxWRGzWQXoxin1WPxcMuT3", col:        "Responsable técnico",
      correo:  "dcMSoJaNrcTOkxW4_dHmkE", colCorreo:  "Correo electrónico responsable técnico",
      celular: "bqWRJdICjiW5NcTvddVSkB", colCelular: "Celular responsable técnico",
      colLider: "Líder",
      // Cada técnico tiene asignado su responsable de proceso.
      lider:   { campo: "dcNwWVCCjno4orW6NdJvPL", catalogo: "responsables_proceso" }
      // `Unidad responsable` (ddJJtcQrHkW4RdTbBcU8oy) es linked_column rota:
      // no sirve para derivar la oficina.
    }
  },

  // Cascada del formulario: cada paso restringe o alimenta al siguiente.
  CASCADA: [
    { campo: "periodo",              depende: null,          catalogo: "periodos" },
    { campo: "estrategia",           depende: "periodo",     catalogo: "estrategias" },
    { campo: "objetivo_estrategico", depende: "estrategia",  catalogo: "objetivos_estrategicos", modo: "heredado", union: " " },
    // Los niveles de proceso NO salen de catálogos: se derivan partiendo
    // la "Ruta completa" del inventario, igual que en Indicadores v49.
    { campo: "proceso_ruta",         depende: null, catalogo: "inventario_procesos", modo: "rutaCompleta" },
    // Elegir el responsable técnico llena nombre, correo y celular, y
    // PROPONE el responsable de proceso desde su líder. Siempre editable:
    // un objetivo puntual puede tener otro responsable de proceso.
    { campo: "responsable_tecnico",  depende: null, catalogo: "responsables_tecnicos", modo: "autocompleta",
      llena: ["resp_tecnico_txt", "resp_tecnico_correo", "resp_tecnico_celular"],
      propone: { campo: "responsable_proceso", desde: "lider" } }
  ],

  // ==========================================================================
  //  CAMPOS ESPEJO — creados en QuintaDB (posiciones 56-67 de la matriz)
  //  El aplicativo escribe aquí; los rel originales quedan intactos para
  //  la vista nativa de QuintaDB.
  // ==========================================================================
  ESPEJO: {
    periodo_txt:              { id: "clzmkIbsnbWOJdIKDhmIj5", type: "string", col: "Periodo (texto)" },
    compromisos_txt:          { id: "bnW7RdMvrhj4pdLSocmvmn", type: "text", col: "Compromisos política (texto)"   },
    estrategia_txt:           { id: "dcGX4mF1zgpkOAWQZcImoj", type: "text", col: "Estrategia (texto)"   },
    objetivo_estrategico_txt: { id: "dcOXNcRSnlu7_dIfdcIWOA", type: "text", col: "Objetivo estratégico (texto)"   },
    proceso_ruta:             { id: "clWPdcVCnjWQFcLSknlmkC", type: "text", col: "Proceso (ruta)"   },
    oficina_txt:              { id: "cUWR41AmnetykXoapdH8of", type: "string", col: "Oficina responsable (texto)" },
    resp_proceso_txt:         { id: "aVWPjSaCnaeikRW50KoeX9", type: "string", col: "Responsable proceso (texto)" },
    resp_proceso_correo:      { id: "bSWR3cTbDdNRm2zSo3aCkZ", type: "email", col: "Correo responsable proceso"  },
    resp_proceso_celular:     { id: "dcLSoYW7ncMyoAW7KPWOnx", type: "phone", col: "Celular responsable proceso"  },
    resp_tecnico_txt:         { id: "bdE8khDtfcIioWlmkjW5i1", type: "string", col: "Responsable técnico (texto)" },
    resp_tecnico_correo:      { id: "dcSSozWPrlz4oJWQOccM1k", type: "email", col: "Correo responsable técnico"  },
    resp_tecnico_celular:     { id: "ddOSk0ubDdKik8kmoAW6Wc", type: "phone", col: "Celular responsable técnico"  }
  },

  // ==========================================================================
  //  REGLAS DE NEGOCIO
  // ==========================================================================
  REGLAS: {

    // Contención de plazos: acción ⊂ objetivo, reporte ⊂ hito ⊂ objetivo
    fechas: {
      hito:    { antes: "bloquear", despues: "bloquear" },
      reporte: { antes: "bloquear", despues: "avisar" },   // extemporáneo (+N días)
      // Una acción correctiva mira hacia adelante: puede pasarse del hito
      // (eso es justo la señal de atraso), pero no del objetivo.
      proxima_accion: { limite: "objetivo", pasadoHito: "avisar", pasadoObjetivo: "bloquear" }
    },

    // % participación de los hitos de un objetivo debe sumar 100
    participacion: { suma: 100, tolerancia: 0.5 },

    // % progreso objetivo = Σ (participación_hito × progreso_hito) / 100
    // % progreso hito     = Σ (contribuciones de sus reportes)
    progreso: { redondeo: 1 },

    // Estado del hito: NO se lee del campo Estado de la tabla Hitos
    // (ese es una fórmula rota). Sale del reporte más reciente por fecha.
    // Sin reportes -> Pendiente.
    estadoHito: { sinReportes: "Pendiente", fuente: "ultimoReportePorFecha" },

    // Semáforo de avance
    semaforo: [
      { max: 49.99, clase: "critico", etiqueta: "Avance crítico" },
      { max: 99.99, clase: "bueno",   etiqueta: "Avance bueno" },
      { max: Infinity, clase: "cumplido", etiqueta: "Cumplido" }
    ],

    // Alertas por vencimiento (días respecto a F.V.)
    alertas: { porVencer: 30 },

    condiciones: ["Vigente", "Despriorizada", "Reformulada"],

    frecuencias: ["Mensual", "Bimensual", "Trimestral", "Semestral", "Anual", "A demanda"]
  }
};

if (typeof module !== "undefined") { module.exports = CONFIG; }

var config = {
    style: 'mapbox://styles/juliamalone/cmkmggz3o006d01qu11bocjeb',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoianVsaWFtYWxvbmUiLCJhIjoiY21rbWYxbzF4MGRraDNsc2ZoeXF0NDc3MSJ9.rqnQB39HmMHXoRo_G-UMLg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Águila imperial ibérica',
            image: './assets/1.jpeg',
            description: ' <p>El Águila imperial ibérica es una de las aves rapaces más emblemáticas de Doñana. Prefiere zonas abiertas y bosques, donde encuentra presas como conejos y otras aves. Esta especie está catalogada como En peligro, y su concentración es más alta en las Marismas, donde existen esfuerzos de protección activa',
            location: {
                center: [-6.458, 37.012],
                zoom: 11,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Nutria europea',
            image: './assets/1.jpeg',
            description: ' <p>La nutria europea es un mamífero semiacuático que habita ríos, canales y zonas húmedas del entorno de Doñana. Su presencia está estrechamente ligada a la calidad del agua y a la disponibilidad de refugios naturales en las riberas.</p><p>Las observaciones se concentran en áreas cercanas a cursos fluviales y humedales, lo que convierte a esta especie en un excelente indicador del estado ecológico de los ecosistemas acuáticos del parque.</p>',
            location: {
                center: [-6.43, 36.989],
                zoom: 11,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Camaleón común',
            image: './assets/3.jpg',
            description: ' <p>El camaleón común es una especie vulnerable que habita principalmente zonas de matorral, dunas y áreas con vegetación baja. En Doñana, su presencia está asociada a espacios con baja presión humana y una estructura vegetal adecuada para camuflarse y cazar insectos.Su distribución espacial es más dispersa que la de otras especies, lo que refleja tanto su comportamiento solitario como su dependencia de microhábitats específicos.</p>',
            location: {
                center: [-6.41, 36.975],
                zoom: 11,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Cerceta pardilla',
            image: './assets/4.jpg',
            description: ' <p>La cerceta pardilla es una de las aves acuáticas más amenazadas de Europa y una especie clave en los humedales del Parque Nacional de Doñana. Depende de lagunas someras, marismas temporales y zonas inundables con vegetación palustre, donde se alimenta y se reproduce. Su presencia en Doñana está estrechamente vinculada al régimen hídrico del parque. Las observaciones se concentran en las Marismas, lo que evidencia la vulnerabilidad de la especie frente a la sequía, la alteración de los ciclos de inundación y la presión humana sobre los humedales.</p>',
            location: {
                center: [-6.476204436123265, 37.01769519530896],
                zoom: 11,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Lince ibérico',
            image: './assets/5.jpg',
            description: ' <p>El lince ibérico es uno de los felinos más amenazados del mundo y un símbolo de la conservación en Doñana. Su supervivencia depende de grandes territorios, abundancia de conejo y baja fragmentación del hábitat. Las observaciones se concentran principalmente en zonas de monte mediterráneo y áreas protegidas, donde los esfuerzos de conservación han permitido una recuperación parcial de la especie.</p>',
            location: {
                center: [-6.442, 36.998],
                zoom: 20,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

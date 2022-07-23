#TEMA
> los componentes de nest no se pueden estilizar
* next/head se puede utilizar más de una, sirve para sobreescribir metadatos según los componentes.
    > ```import Head from 'next/head'´´´

* Manera de importar styles
    > ```import styles from '../styles/Home.module.css'´´´
    > ```<h1 className={styles.title}>Hello</h1>´´´

* next/link reemplaza ```<a href="/">Home</a>´´´ , es prefech de la página a llamar y así la página no se recarga. Se puede deshabilitar (prefech=false). Se puede usar ```replace´´´ para que no muestre el navegador la fecha de retroseso.
    > ```import Link from 'next/link'´´´
    > ```<Link href="/about">About</Link>´´´

* next/router
    > ```import { useRouter } from 'next/router'´´´
    > ```const router = useRouter()´´´ router es un objeto que tiene como propiedad el asPath(url de la pagina que está)

* styles 
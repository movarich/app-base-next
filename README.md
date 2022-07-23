#TEMA
> los componentes de nextjs no se pueden estilizar
* next/head se puede utilizar más de una, sirve para sobreescribir metadatos según los componentes.
    ``import Head from 'next/head'´´´

* next/link reemplaza ```<a href="/">Home</a>´´´ , hace prefech de la página a llamar para que la página no se recargue al llamar. Se puede deshabilitar (prefech=false). Se puede usar "replace" para que no muestre el navegador la fecha de retroceso.
    ```import Link from 'next/link'´´´
    ```<Link href="/about">About</Link>´´´

* Manera de importar styles module
    ```import styles from '../styles/Home.module.css'´´´
    ```<h1 className={styles.title}>Hello</h1>´´´


* next/router
    ```import { useRouter } from 'next/router'´´´
    ```const router = useRouter()´´´ router es un objeto que tiene como propiedad el asPath(url de la pagina que está)

* styles global importar
    ```import '../styles/globals.css'´´´ en el _app.js
    ```<h1 className={"title"}>´´´
    ```<h1 className="main">´´´
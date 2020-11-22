import Home from 'templates/Home'

export default function Index(props: any) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      heading: 'Olha eu aqui'
    }
  }
}

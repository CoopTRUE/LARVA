<script>
  import { Router, Route} from 'svelte-routing'
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import Navbar from './lib/Navbar.svelte'
  import Footer from './lib/Footer.svelte'
  import Home from './routes/home.svelte'
  import ErrorPage from './routes/error.svelte'
  import Orders from './routes/orders.svelte'
  import Portfolio from './routes/portfolio.svelte'
</script>

<Navbar />
<Router>
  <Route path="/"><Home /></Route>
  <Route path="/orders"><Orders /></Route>
  <Route path="/portfolio"><Portfolio /></Route>
  <Route path='*'><ErrorPage /></Route>
</Router>
<Footer />
<SvelteToast />
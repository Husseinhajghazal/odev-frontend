<script>
  import "bootstrap/dist/css/bootstrap.min.css";
  import { ToastContainer, FlatToast } from "svelte-toasts";
  import "../app.css";
</script>

<slot />
<ToastContainer placement="bottom-right" let:data>
  <FlatToast {data} />
</ToastContainer>

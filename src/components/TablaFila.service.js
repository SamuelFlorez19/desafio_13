import Swal from "sweetalert2";

export const notificacionSweet = (nombre, cb) => {

    Swal.fire({
        title: `¿Estás seguro de que quieres eliminar el Usuario: ${nombre}`,
        text: "No podras revertir esta accion!!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          cb()
          Swal.fire({
            title: "Eliminado",
            text: "El usuario ha sido eliminado con exito",
            icon: "success"
          });
        }
      });
}


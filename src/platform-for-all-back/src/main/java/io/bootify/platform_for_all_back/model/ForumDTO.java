package io.bootify.platform_for_all_back.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Size;
import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ForumDTO {

    @SuppressWarnings("unused")
    private String idForum;

    @Size(max = 255)
    private String titulo;

    @SuppressWarnings("unused")
    private String detalles;

    @Size(max = 255)
    private String tituloObra;

    @Size(max = 255)
    private String author;

    @Schema(type = "string", example = "18:30")
    private LocalTime fechaPublicacion;

    @Size(max = 50)
    private String estado;

    @SuppressWarnings("unused")
    private String reporte;

}

package io.bootify.platform_for_all_back.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Size;
import java.time.LocalTime;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ForumDTO {

    @Size(max = 255)
    private String titulo;

    @Size(max = 255)
    private String tituloObra;

    @Size(max = 255)
    private String author;

    @Size(max = 50)
    private String estado;

}

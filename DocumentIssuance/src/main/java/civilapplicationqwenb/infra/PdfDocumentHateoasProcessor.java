package civilapplicationqwenb.infra;

import civilapplicationqwenb.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class PdfDocumentHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<PdfDocument>> {

    @Override
    public EntityModel<PdfDocument> process(EntityModel<PdfDocument> model) {
        return model;
    }
}

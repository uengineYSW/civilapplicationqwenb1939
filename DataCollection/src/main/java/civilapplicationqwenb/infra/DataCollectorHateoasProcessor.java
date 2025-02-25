package civilapplicationqwenb.infra;

import civilapplicationqwenb.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class DataCollectorHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<DataCollector>> {

    @Override
    public EntityModel<DataCollector> process(
        EntityModel<DataCollector> model
    ) {
        return model;
    }
}

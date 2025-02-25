package civilapplicationqwenb.domain;

import java.util.Date;
import lombok.Data;

@Data
public class DataCollectionTaskSummaryQuery {

    private String sourceSystem;
    private CollectionStatus status;
    private Date nextRunTime;
}

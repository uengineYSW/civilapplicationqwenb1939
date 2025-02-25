package civilapplicationqwenb.domain;

import java.util.Date;
import lombok.Data;

@Data
public class DataCollectionTaskDetailsQuery {

    private String sourceSystem;
    private String collectionSchedule;
    private CollectionStatus status;
    private Date nextRunTime;
}

package civilapplicationqwenb.domain;

import civilapplicationqwenb.DataCollectionApplication;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "DataCollector_table")
@Data
//<<< DDD / Aggregate Root
public class DataCollector {

    @Id
    private String dataCollectorId;

    @Enumerated(EnumType.STRING)
    private CollectionStatus status;

    private String schedule;

    private Date nextRunTime;

    @Embedded
    private UserData userData;

    @Embedded
    private Document document;

    @Embedded
    private ApplicationId applicationId;

    public static DataCollectorRepository repository() {
        DataCollectorRepository dataCollectorRepository = DataCollectionApplication.applicationContext.getBean(
            DataCollectorRepository.class
        );
        return dataCollectorRepository;
    }

    public void CreateDataCollectionTask() {
        //
    }
}
//>>> DDD / Aggregate Root

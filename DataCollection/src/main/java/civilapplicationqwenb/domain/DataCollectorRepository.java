package civilapplicationqwenb.domain;

import civilapplicationqwenb.domain.*;
import java.util.Date;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(
    collectionResourceRel = "dataCollectors",
    path = "dataCollectors"
)
public interface DataCollectorRepository
    extends PagingAndSortingRepository<DataCollector, String> {
    @Query(
        value = "select dataCollector " +
        "from DataCollector dataCollector " +
        "where(:sourceSystem is null or dataCollector.sourceSystem like %:sourceSystem%) and (:status is null or dataCollector.status = :status) and (:nextRunTime is null or dataCollector.nextRunTime = :nextRunTime)"
    )
    List<DataCollector> dataCollectionTaskSummary(
        String sourceSystem,
        CollectionStatus status,
        Date nextRunTime,
        Pageable pageable
    );

    @Query(
        value = "select dataCollector " +
        "from DataCollector dataCollector " +
        "where(:sourceSystem is null or dataCollector.sourceSystem like %:sourceSystem%) and (:collectionSchedule is null or dataCollector.collectionSchedule like %:collectionSchedule%) and (:status is null or dataCollector.status = :status) and (:nextRunTime is null or dataCollector.nextRunTime = :nextRunTime)"
    )
    DataCollector dataCollectionTaskDetails(
        String sourceSystem,
        String collectionSchedule,
        CollectionStatus status,
        Date nextRunTime
    );

    @Query(
        value = "select dataCollector " +
        "from DataCollector dataCollector " +
        "where(:startTime is null or dataCollector.startTime = :startTime) and (:endTime is null or dataCollector.endTime = :endTime)"
    )
    List<DataCollector> dataCollectionLog(
        Date startTime,
        Date endTime,
        Pageable pageable
    );
}

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
    collectionResourceRel = "applications",
    path = "applications"
)
public interface ApplicationRepository
    extends PagingAndSortingRepository<Application, String> {
    @Query(
        value = "select application " +
        "from Application application " +
        "where(:applicationNumber is null or application.applicationNumber like %:applicationNumber%) and (:serviceType is null or application.serviceType = :serviceType) and (:status is null or application.status = :status) and (:applicationDate is null or application.applicationDate = :applicationDate)"
    )
    List<Application> applicationSummary(
        String applicationNumber,
        ServiceType serviceType,
        ApplicationStatus status,
        Date applicationDate,
        Pageable pageable
    );

    @Query(
        value = "select application " +
        "from Application application " +
        "where(:applicationNumber is null or application.applicationNumber like %:applicationNumber%) and (:serviceType is null or application.serviceType = :serviceType) and (:applicationDate is null or application.applicationDate = :applicationDate) and (:status is null or application.status = :status) and (:documents is null or application.documents = :documents) and (:userData is null or application.userData = :userData)"
    )
    Application applicationDetails(
        String applicationNumber,
        ServiceType serviceType,
        Date applicationDate,
        ApplicationStatus status,
        List<Document> documents,
        UserData userData
    );
}

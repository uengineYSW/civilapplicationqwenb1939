package civilapplicationqwenb.domain;

import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;
import org.springframework.beans.BeanUtils;

public enum SignatureStatus {
    PENDING,
    COMPLETED,
    INVALID,
}

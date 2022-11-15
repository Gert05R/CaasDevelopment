using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class malvernData: BaseEntity
    {

        public string actionType { get; set; }

        public string timestamp { get; set; }

        public string userName { get; set; }

        public string  userId { get; set; }

        public string computerId { get; set; }

        public string FileName { get; set; }

        public string DateRange { get; set; }

        public AuditTrailType auditTrailType { get; set; }

        public int AuditTrailTypeId { get; set; }

        public FileType fileType { get; set; }

        public int FileTypeId { get; set; }
    }
}

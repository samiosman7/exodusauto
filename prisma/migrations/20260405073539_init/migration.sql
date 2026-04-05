-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "niche" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "websiteUrl" TEXT,
    "source" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadWebAudit" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "hasWebsite" BOOLEAN NOT NULL DEFAULT false,
    "websiteQualityScore" INTEGER,
    "issuesFoundJson" JSONB,
    "summary" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeadWebAudit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemoSite" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "nicheTemplate" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "contentJson" JSONB NOT NULL,
    "publicUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DemoSite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CallScript" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "scriptText" TEXT NOT NULL,
    "talkingPointsJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CallScript_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LeadWebAudit_leadId_key" ON "LeadWebAudit"("leadId");

-- CreateIndex
CREATE UNIQUE INDEX "DemoSite_leadId_key" ON "DemoSite"("leadId");

-- CreateIndex
CREATE UNIQUE INDEX "DemoSite_slug_key" ON "DemoSite"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CallScript_leadId_key" ON "CallScript"("leadId");

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadWebAudit" ADD CONSTRAINT "LeadWebAudit_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemoSite" ADD CONSTRAINT "DemoSite_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallScript" ADD CONSTRAINT "CallScript_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

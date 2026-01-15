from pydantic import BaseModel, Field, HttpUrl
from typing import Optional, Dict, Any
from fastapi import UploadFile, File




class PDFGenerationResponse(BaseModel):
    """Response model for PDF generation"""
    success: bool = Field(..., description="Whether PDF generation was successful")
    message: str = Field(..., description="Status message")
    pdf_url: Optional[str] = Field(None, description="URL to download the generated PDF")
    pdf_filename: Optional[str] = Field(None, description="Name of the generated PDF file")

    class Config:
        json_schema_extra = {
            "example": {
                "success": True,
                "message": "PDF generated successfully",
                "pdf_url": "/api/download/project_architecture_1234567890.pdf",
                "pdf_filename": "project_architecture_1234567890.pdf"
            }
        }

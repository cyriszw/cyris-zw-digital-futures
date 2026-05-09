
CREATE TABLE public.project_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  project_type TEXT NOT NULL,
  color_scheme TEXT,
  website_style TEXT,
  page_count TEXT,
  features TEXT[],
  budget_range TEXT,
  deadline TEXT,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.project_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a project request"
ON public.project_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can view project requests"
ON public.project_requests
FOR SELECT
TO authenticated
USING (true);

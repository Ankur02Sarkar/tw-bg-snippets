"use client";
import { BACKGROUND_OPTIONS } from "@/components/background";
import Playground from "@/components/playground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ArrowRight, Github, Twitter, Search } from "lucide-react";
import { useState, useMemo } from "react";

export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const resetBg = () => {
    setPreview(null);
    setTheme("light");
  };

  // Filter backgrounds based on search query
  const filteredBackgrounds = useMemo(() => {
    return BACKGROUND_OPTIONS.filter(background =>
      background.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBackgrounds.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBackgrounds = filteredBackgrounds.slice(startIndex, endIndex);

  // Reset to page 1 when search query or items per page changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(parseInt(value));
    setCurrentPage(1);
  };

  return (
    <div className={`${theme}`}>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {preview ? preview : null}
      </div>
      <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <header className="flex items-center justify-between py-8">
          <div />
          <nav className="flex gap-6">
            <a
              href="https://twitter.com/Ankur02Sarkar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Twitter
                className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="https://github.com/Ankur02Sarkar/tw-bg-snippets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Github
                className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                strokeWidth={1.5}
              />
            </a>
          </nav>
        </header>
        <div className="pt-8">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-8 flex">
              <a
                href="https://github.com/Ankur02Sarkar/tw-bg-snippets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                    New snippets ⚡️
                    <span className="inline-flex items-center pl-2 text-black dark:text-white">
                      Read more{" "}
                      <ArrowRight
                        className="pl-0.5 text-black dark:text-white"
                        size={16}
                      />
                    </span>
                  </div>
                </span>
              </a>
            </div>
            <h2 className="text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
              Collection of modern,{" "}
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                background snippets
              </span>
            </h2>
            <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
              Ready-to-use, simply copy and paste into your next project. All
              snippets crafted with Tailwind CSS and{" "}
              <span className="cursor-wait opacity-70">Vanilla CSS</span> for
              easy integration.
            </p>
            <div className="mt-10 flex gap-4">
              <a
                href="https://github.com/Ankur02Sarkar/tw-bg-snippets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button>
                  Go to GitHub <ArrowRight className="pl-0.5" size={16} />
                </Button>{" "}
              </a>
              <Button variant="secondary" onClick={resetBg}>
                Reset background
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden px-4 pb-20 pt-52 md:px-10">
          {/* Search and Filter Controls */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search backgrounds..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Show:</span>
              <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
                <SelectTrigger className="w-20 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-gray-600 dark:text-gray-400">per page</span>
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {currentBackgrounds.length} of {filteredBackgrounds.length} backgrounds
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Background Grid */}
          {currentBackgrounds.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
              {currentBackgrounds.map((background, index) => {
                 return (
                   <Playground
                     key={`${background.name}-${startIndex + index}`}
                     setPreview={setPreview}
                     theme={background.theme}
                     setTheme={setTheme}
                     name={background.name}
                   >
                     {background.component}
                   </Playground>
                 );
               })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <Search className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                No backgrounds found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                {searchQuery
                  ? `No backgrounds match "${searchQuery}". Try a different search term.`
                  : "No backgrounds available."}
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current page
                    const showPage = 
                      page === 1 || 
                      page === totalPages || 
                      (page >= currentPage - 1 && page <= currentPage + 1);
                    
                    if (!showPage) {
                      // Show ellipsis for gaps
                      if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <PaginationItem key={`ellipsis-${page}`}>
                            <span className="px-3 py-2 text-gray-400">...</span>
                          </PaginationItem>
                        );
                      }
                      return null;
                    }
                    
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
          <div className="inline-flex max-w-2xl rounded-md border border-neutral-200 bg-white p-2 text-sm text-neutral-900 dark:border-neutral-900 dark:bg-black dark:text-neutral-200">
            {`These backgrounds are made for a full page background. The preview
              can be different from the actual result. Click on preview to test
              it. And don't forget to tweak it to your needs.`}
          </div>
        </div>
        <footer>
          <div className="flex items-center justify-center py-8">
            <span className="text-sm text-neutral-800 dark:text-neutral-200">
              Made by
              <a
                href="https://twitter.com/Ankur02Sarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-neutral-950 dark:text-neutral-100"
              >
                @Ankur02Sarkar
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

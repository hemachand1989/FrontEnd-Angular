using System.Web;
using System.Web.Optimization;

namespace FrontEnd
{
    public class BundleConfig
    {
        
        public static void RegisterBundles(BundleCollection bundles)
        {
            var pageScripts = new ScriptBundle("~/bundles/FrontEndApp");
            
            pageScripts.Include("~/Scripts/Libraries/angular.min.js");
            pageScripts.Include("~/Scripts/FrontEndApp.js");
            pageScripts.Include("~/Scripts/Constants.js");
            pageScripts.IncludeDirectory("~/Scripts/Controllers", "*.js");
            pageScripts.IncludeDirectory("~/Scripts/Handlers", "*.js");
            pageScripts.IncludeDirectory("~/Scripts/Services", "*.js");

            //Enables or disables bundling
            System.Web.Optimization.BundleTable.EnableOptimizations = true;
            bundles.Add(pageScripts);

            bundles.Add(new StyleBundle("~/Content/css").Include(
                     "~/Content/bootstrap.css",
                     "~/Content/site.css",
                     "~/Content/bootstrap-responsive.css"));
        }
    }
}
